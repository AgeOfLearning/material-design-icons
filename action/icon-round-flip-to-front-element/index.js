import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFlipToFrontElement
 * @class IconRoundFlipToFrontElement
 * @extends {AoflElement}
 */
class IconRoundFlipToFrontElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFlipToFrontElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-flip-to-front';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFlipToFrontElement.is, IconRoundFlipToFrontElement);

export default IconRoundFlipToFrontElement;
