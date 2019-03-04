<template>
    <div id="advert">
        <ul class="advert-wrapper">
            <li class="advert-list">
                <a>
                    <img src="https://resource.smartisan.com/resource/067b3a1d3aeeff466fe16e10c20efefe.jpg?x-oss-process=image/format,jpg/quality,Q_100" />
                </a>
            </li>
            <li class="advert-list">
                <a>
                    <img src="https://resource.smartisan.com/resource/3311d2d535ece2f8bf8380530ddd4ef8.jpg?x-oss-process=image/format,jpg/quality,Q_100" />
                </a>
            </li>
            <li class="advert-list">
                <a>
                    <img src="https://resource.smartisan.com/resource/3c9489bedef473d26af2ffa15d4b114f.jpg?x-oss-process=image/format,jpg/quality,Q_100" />
                </a>
            </li>
            <li class="advert-list">
                <a>
                    <img src="https://resource.smartisan.com/resource/5221521ce5dd54d787e43ab28c8b9168.jpg?x-oss-process=image/format,jpg/quality,Q_100" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'advert'
    }
</script>

<style>
    .advert-wrapper {
        height: 100%;
        display: flex;
        width: 90%;
        margin: 20px 5% 20px 5%;
        justify-content: space-between;
    }

    .advert-wrapper .advert-list {
        position: relative;
        float: left;
    }
</style>
