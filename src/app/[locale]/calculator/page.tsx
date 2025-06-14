import TableOfContents from '@/components/TableOfContents';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Page() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ flex: 3, paddingRight: '2rem' }}>
        <Typography variant="h1" gutterBottom>
          Calculator
        </Typography>
        <Typography variant="body1" paragraph>
          This is the calculator page.
        </Typography>

        <section>
          <Typography variant="h2" id="section1" gutterBottom>
            Section 1: Introduction
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta.
          </Typography>
          <Typography variant="body1" paragraph>
            Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Porttitor eget dolor morbi non arcu risus quis varius. Augue neque gravida in fermentum et sollicitudin ac orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.
            Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
          </Typography>

          <Typography variant="h3" id="subsection1-1" gutterBottom>
            Subsection 1.1: Details
          </Typography>
          <Typography variant="body1" paragraph>
            Nunc sed id semper risus in hendrerit gravida rutrum. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Nibh praesent tristique magna sit amet purus gravida quis. Netus et malesuada fames ac turpis egestas integer. Elementum curabitur vitae nunc sed velit dignissim sodales ut.
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
          </Typography>
          <Typography variant="body1" paragraph>
            Id aliquet lectus proin nibh nisl condimentum id venenatis. Risus ultricies tristique nulla aliquet enim tortor at auctor. Condimentum lacinia quis vel eros donec ac odio. Tellus elementum sagittis vitae et leo duis ut diam.
            Sed porttitor lectus nibh. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat.
          </Typography>

          <Typography variant="h3" id="subsection1-2" gutterBottom>
            Subsection 1.2: More Details
          </Typography>
          <Typography variant="body1" paragraph>
            Vitae suscipit tellus mauris a diam maecenas sed enim. Eget arcu dictum varius duis at consectetur lorem donec. Faucibus purus in massa tempor nec feugiat nisl pretium. Quis lectus nulla at volutpat diam ut venenatis tellus in. Eu sem integer vitae justo eget magna fermentum iaculis eu.
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat.
          </Typography>

          <Card sx={{ my: 2 }} id="card-example-1" data-toc-title="Important Card Section" data-toc-level="3">
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Card Title (Not in ToC)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is the content of the card. We want this card to appear in the Table of Contents using the title specified in `data-toc-title`.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Typography>
            </CardContent>
          </Card>

        </section>

        <section>
          <Typography variant="h2" id="section2" gutterBottom>
            Section 2: Advanced Topics
          </Typography>
          <Typography variant="body1" paragraph>
            Adipiscing elit duis tristique sollicitudin nibh sit amet. Nisl purus in mollis nunc sed id semper. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Tortor posuere ac ut consequat semper viverra nam libero. Ac tortor dignissim convallis aenean et tortor at risus viverra.
            Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.
          </Typography>
          <Typography variant="body1" paragraph>
            Commodo ullamcorper a lacus vestibulum sed arcu non odio. Urna porttitor rhoncus dolor purus non enim praesent elementum. Felis eget nunc lobortis mattis aliquam faucibus purus in. Viverra justo nec ultrices dui sapien eget mi proin.
            Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          </Typography>

          <Typography variant="h3" id="subsection2-1" gutterBottom>
            Subsection 2.1: Complex Calculations
          </Typography>
          <Typography variant="body1" paragraph>
            Turpis egestas pretium aenean pharetra magna ac placerat. Sed nisi lacus sed viverra tellus in hac habitasse. Sit amet consectetur adipiscing elit duis tristique sollicitudin. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. At tempor commodo ullamcorper a lacus vestibulum sed arcu.
            Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada.
          </Typography>
          <Typography variant="h3" id="subsection2-2" gutterBottom>
            Subsection 2.2: Integrations
          </Typography>
          <Typography variant="body1" paragraph>
            Nunc consequat interdum varius sit amet mattis vulputate enim. Massa ultricies mi quis hendrerit dolor magna eget est. Bibendum arcu vitae elementum curabitur vitae nunc sed. Tellus cras adipiscing enim eu turpis egestas pretium aenean.
            Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.
          </Typography>

          <Card sx={{ my: 2 }} id="card-example-2" data-toc-title="Another Card Example (Level 2)" data-toc-level="2">
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Another Card (Not in ToC)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This card demonstrates how to specify a different level for the ToC entry.
                Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
              </Typography>
            </CardContent>
          </Card>

        </section>

        <section>
          <Typography variant="h2" id="section3" gutterBottom>
            Section 3: Conclusion
          </Typography>
          <Typography variant="body1" paragraph>
            Ornare lectus sit amet est placerat in egestas erat. Pulvinar elementum integer enim neque volutpat ac tincidunt. Eget nullam non nisi est sit amet facilisis magna. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Ut lectus arcu bibendum at varius vel pharetra vel.
            Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh.
          </Typography>
          <Typography variant="body1" paragraph>
            Amet justo donec enim diam vulputate ut pharetra. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Mauris cursus mattis molestie a iaculis at erat pellentesque.
            Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          </Typography>
        </section>

        <section>
          <Typography variant="h2" id="section4" gutterBottom>
            Section 4: Appendix
          </Typography>
          <Typography variant="body1" paragraph>
            Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta.
          </Typography>
          <Typography variant="h3" id="subsection4-1" gutterBottom>
            Subsection 4.1: Further Reading
          </Typography>
          <Typography variant="body1" paragraph>
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
            Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
          </Typography>
        </section>

      </Box>
      <Box component="aside" sx={{ flex: 1, position: 'sticky', top: '4rem', height: 'calc(100vh - 4rem)' }}>
        <TableOfContents selectors="h2, h3, [data-toc-title]" />
      </Box>
    </Box>
  );
}