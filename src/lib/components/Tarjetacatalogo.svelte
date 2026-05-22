<script>
    const { precio, titulo,img,descripcion } = $props()
</script>

<div>

    <img src="/monturas.jpg" alt="" />

    <div>
        <p>{titulo}</p>
        <p>{descripcion}</p> 
        <div>
            <p>{precio}$</p>
            <button><img src={img} alt=""></button>
        </div>
    </div>
</div>