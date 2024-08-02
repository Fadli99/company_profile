import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Kassen Kyocera

![Kassen Kyocera](https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/clvlugru90000o4g8ahxp069s/db7abbe3-aa5c-433e-a16d-cbf137d1c9e5.png/public)

Kassen Kyocera merupakan pelopor dalam menyediakan solusi pencetakan serbaguna yang menggabukan kualitas tinggi, teknologi terkini, dan kemudahan penggunaan untuk memenuhi kebutuhan bisnis perusahaan dan pribadi anda. Brand yang kami tawarkan yaitu printer merk Kyocera yang berasal dari JAPAN.

APA YANG KAMI TAWARKAN

Kassen Kyocera mengkhususkan diri dalam [brand printer merk Kyocera, misalnya: "perangkat cetak, solusi pemrosesan dokumen, dan perangkat keras teknologi informasi"]. Produk kami dirancang dengan memadukan teknologi terbaru dengan desain yang ergonomis, memastikan kinerja optimal dan kenyamanan pengguna.

KOMITMEN KAMI

Kami berkomitmen untuk menyediakan produk berkualitas tinggi dan layanan pelanggan yang tak tertandingi. Melalui pendekatan yang berfokus pada pelanggan, kami berusaha untuk memahami dan memenuhi kebutuhan unik setiap klien kami, sambil menjaga standar etika dan keberlanjutan yang tinggi dalam setiap aspek operasi kami.

TIM KAMI

Tim kami terdiri dari para profesional yang berdedikasi dan berpengalaman di bidangnya masing-masing. Kami percaya bahwa keberhasilan kami terletak pada orang-orang yang membuatnya terjadi, dan kami berinvestasi dalam pengembangan profesional dan kesejahteraan mereka.

HUBUNGI KAMI

Untuk informasi lebih lanjut tentang produk dan layanan kami, atau untuk menjalin kemitraan dengan kami, jangan ragu untuk menghubungi tim kami di nomor whatsapp kami. Kami siap membantu Anda dengan solusi teknologi terbaik yang sesuai dengan kebutuhan Anda.`;

export async function generateMetadata() {
  return {
    title: "Kassen Kyocera",
    description: "Brand Printer Merk Kyocera Made in JAPAN",
    openGraph: {
      title: "Kassen Kyocera",
      description: "Brand Printer Merk Kyocera Made in JAPAN",
      images: [
        signOgImageUrl({
          title: "Kassen Kyocera",
          label: "Kassen Kyocera",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
