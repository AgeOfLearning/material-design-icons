import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMonochromePhotosElement
 * @class IconBaselineMonochromePhotosElement
 * @extends {AoflElement}
 */
class IconBaselineMonochromePhotosElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMonochromePhotosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-monochrome-photos';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMonochromePhotosElement.is, IconBaselineMonochromePhotosElement);

export default IconBaselineMonochromePhotosElement;
