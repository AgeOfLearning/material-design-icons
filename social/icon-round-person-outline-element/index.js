import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPersonOutlineElement
 * @class IconRoundPersonOutlineElement
 * @extends {AoflElement}
 */
class IconRoundPersonOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPersonOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-person-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPersonOutlineElement.is, IconRoundPersonOutlineElement);

export default IconRoundPersonOutlineElement;
