import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMoodElement
 * @class IconTwotoneMoodElement
 * @extends {AoflElement}
 */
class IconTwotoneMoodElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMoodElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-mood';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMoodElement.is, IconTwotoneMoodElement);

export default IconTwotoneMoodElement;
