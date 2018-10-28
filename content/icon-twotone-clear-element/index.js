import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneClearElement
 * @class IconTwotoneClearElement
 * @extends {AoflElement}
 */
class IconTwotoneClearElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneClearElement.is, IconTwotoneClearElement);

export default IconTwotoneClearElement;
