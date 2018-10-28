import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBorderClearElement
 * @class IconTwotoneBorderClearElement
 * @extends {AoflElement}
 */
class IconTwotoneBorderClearElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBorderClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-border-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBorderClearElement.is, IconTwotoneBorderClearElement);

export default IconTwotoneBorderClearElement;
