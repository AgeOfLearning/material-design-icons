import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTouchAppElement
 * @class IconTwotoneTouchAppElement
 * @extends {AoflElement}
 */
class IconTwotoneTouchAppElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTouchAppElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-touch-app';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTouchAppElement.is, IconTwotoneTouchAppElement);

export default IconTwotoneTouchAppElement;
