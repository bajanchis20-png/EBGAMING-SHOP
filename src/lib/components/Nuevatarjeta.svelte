<script>
    let{titulo,img,precio,descripcion}= $props()
</script>

<div>
    <div>
        <p>oferta destacada</p>
        <img src={img} alt="" />
    </div>
    <div>
        <p>{titulo}</p>
        <p>{descripcion}</p>
        <div>
            <p>{precio}</p>
            <p>Stock disponible</p>
        </div>
        <button>comprar por whatsapp</button>
    </div>
</div>
