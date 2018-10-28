import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFastForwardElement
 * @class IconTwotoneFastForwardElement
 * @extends {AoflElement}
 */
class IconTwotoneFastForwardElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFastForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-fast-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFastForwardElement.is, IconTwotoneFastForwardElement);

export default IconTwotoneFastForwardElement;
