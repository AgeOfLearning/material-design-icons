import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWorkOutlineElement
 * @class IconRoundWorkOutlineElement
 * @extends {AoflElement}
 */
class IconRoundWorkOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWorkOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-work-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWorkOutlineElement.is, IconRoundWorkOutlineElement);

export default IconRoundWorkOutlineElement;
