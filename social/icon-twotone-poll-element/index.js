import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePollElement
 * @class IconTwotonePollElement
 * @extends {AoflElement}
 */
class IconTwotonePollElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePollElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-poll';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePollElement.is, IconTwotonePollElement);

export default IconTwotonePollElement;
