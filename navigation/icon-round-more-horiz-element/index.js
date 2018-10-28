import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMoreHorizElement
 * @class IconRoundMoreHorizElement
 * @extends {AoflElement}
 */
class IconRoundMoreHorizElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMoreHorizElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-more-horiz';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMoreHorizElement.is, IconRoundMoreHorizElement);

export default IconRoundMoreHorizElement;
