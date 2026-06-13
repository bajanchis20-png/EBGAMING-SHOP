<script>
    import { db } from "$lib/firebase"; 
    import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore"; 
    import { onMount } from "svelte";

    let nombre = "";
    let pedido = "";
    let contacto = ""; // Nuevo campo para WhatsApp/Email
    let pedidos = [];

    onMount(() => {
        const q = query(collection(db, "pedidos"), orderBy("fecha", "desc"));
        return onSnapshot(q, (snapshot) => {
            pedidos = snapshot.docs.map(doc => ({
                ...doc.data(),
                fechaFormateada: doc.data().fecha?.toDate().toLocaleDateString()
            }));
        });
    });

    async function enviarPedido() {
        if (!nombre || !pedido || !contacto) return;
        try {
            await addDoc(collection(db, "pedidos"), {
                nombre: nombre,
                pedido: pedido,
                contacto: contacto,
                fecha: new Date()
            });
            alert("¡Pedido recibido! Te contactaremos pronto.");
            nombre = ""; pedido = ""; contacto = "";
        } catch (e) {
            console.error("Error al enviar: ", e);
        }
    }
</script>

<div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: sans-serif; color: white;">
    <h2 style="text-align: center; margin-bottom: 30px;">Realizar Pedido</h2>

    <form on:submit|preventDefault={enviarPedido} style="display: flex; flex-direction: column; gap: 15px; margin-bottom: 50px;">
        <input bind:value={nombre} placeholder="Tu nombre" required style="padding: 12px; background: #111; border: 1px solid #444; color: white; border-radius: 4px;" />
        <input bind:value={contacto} placeholder="WhatsApp o usuario de contacto" required style="padding: 12px; background: #111; border: 1px solid #444; color: white; border-radius: 4px;" />
        <textarea bind:value={pedido} placeholder="¿Qué items deseas comprar?" required style="padding: 12px; background: #111; border: 1px solid #444; color: white; border-radius: 4px; height: 100px;"></textarea>
        <button type="submit" style="padding: 12px; cursor: pointer; background: #25d366; color: white; font-weight: bold; border: none; border-radius: 4px;">Enviar Pedido por EBGAMING</button>
    </form>
</div>