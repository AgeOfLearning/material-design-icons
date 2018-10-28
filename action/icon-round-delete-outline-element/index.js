import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDeleteOutlineElement
 * @class IconRoundDeleteOutlineElement
 * @extends {AoflElement}
 */
class IconRoundDeleteOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDeleteOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-delete-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDeleteOutlineElement.is, IconRoundDeleteOutlineElement);

export default IconRoundDeleteOutlineElement;
