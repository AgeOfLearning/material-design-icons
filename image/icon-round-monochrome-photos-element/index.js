import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMonochromePhotosElement
 * @class IconRoundMonochromePhotosElement
 * @extends {AoflElement}
 */
class IconRoundMonochromePhotosElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMonochromePhotosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-monochrome-photos';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMonochromePhotosElement.is, IconRoundMonochromePhotosElement);

export default IconRoundMonochromePhotosElement;
