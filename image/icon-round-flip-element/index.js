import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFlipElement
 * @class IconRoundFlipElement
 * @extends {AoflElement}
 */
class IconRoundFlipElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFlipElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-flip';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFlipElement.is, IconRoundFlipElement);

export default IconRoundFlipElement;
