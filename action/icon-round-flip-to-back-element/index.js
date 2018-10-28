import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFlipToBackElement
 * @class IconRoundFlipToBackElement
 * @extends {AoflElement}
 */
class IconRoundFlipToBackElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFlipToBackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-flip-to-back';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFlipToBackElement.is, IconRoundFlipToBackElement);

export default IconRoundFlipToBackElement;
