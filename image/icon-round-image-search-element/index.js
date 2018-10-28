import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundImageSearchElement
 * @class IconRoundImageSearchElement
 * @extends {AoflElement}
 */
class IconRoundImageSearchElement extends AoflElement {
  /**
   * Creates an instance of IconRoundImageSearchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-image-search';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundImageSearchElement.is, IconRoundImageSearchElement);

export default IconRoundImageSearchElement;
