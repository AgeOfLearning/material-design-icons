import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDoneOutlineElement
 * @class IconRoundDoneOutlineElement
 * @extends {AoflElement}
 */
class IconRoundDoneOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDoneOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-done-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDoneOutlineElement.is, IconRoundDoneOutlineElement);

export default IconRoundDoneOutlineElement;
