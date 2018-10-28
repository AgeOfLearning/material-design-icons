import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMicElement
 * @class IconTwotoneMicElement
 * @extends {AoflElement}
 */
class IconTwotoneMicElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-mic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMicElement.is, IconTwotoneMicElement);

export default IconTwotoneMicElement;
