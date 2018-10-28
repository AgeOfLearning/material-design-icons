import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineImageSearchElement
 * @class IconBaselineImageSearchElement
 * @extends {AoflElement}
 */
class IconBaselineImageSearchElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineImageSearchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-image-search';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineImageSearchElement.is, IconBaselineImageSearchElement);

export default IconBaselineImageSearchElement;
