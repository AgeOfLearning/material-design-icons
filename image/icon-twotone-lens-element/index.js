import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLensElement
 * @class IconTwotoneLensElement
 * @extends {AoflElement}
 */
class IconTwotoneLensElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLensElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-lens';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLensElement.is, IconTwotoneLensElement);

export default IconTwotoneLensElement;
