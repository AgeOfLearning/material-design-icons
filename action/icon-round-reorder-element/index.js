import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundReorderElement
 * @class IconRoundReorderElement
 * @extends {AoflElement}
 */
class IconRoundReorderElement extends AoflElement {
  /**
   * Creates an instance of IconRoundReorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-reorder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundReorderElement.is, IconRoundReorderElement);

export default IconRoundReorderElement;
