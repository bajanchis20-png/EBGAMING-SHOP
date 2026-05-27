<script>
    const { precio, titulo,img,descripcion } = $props()
</script>

<div>

    <img src={img} alt="" />

    <div>
        <p>{titulo}</p>
        <p>{descripcion}</p> 
        <div>
            <p>{precio}$</p>
            <button>
                fdfy
            </button>
        </div>
    </div>
</div>