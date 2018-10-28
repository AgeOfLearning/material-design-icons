import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLabelElement
 * @class IconTwotoneLabelElement
 * @extends {AoflElement}
 */
class IconTwotoneLabelElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLabelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-label';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLabelElement.is, IconTwotoneLabelElement);

export default IconTwotoneLabelElement;
