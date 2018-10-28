import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMicOffElement
 * @class IconTwotoneMicOffElement
 * @extends {AoflElement}
 */
class IconTwotoneMicOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMicOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-mic-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMicOffElement.is, IconTwotoneMicOffElement);

export default IconTwotoneMicOffElement;
