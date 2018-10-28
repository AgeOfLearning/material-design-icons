import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFlagElement
 * @class IconTwotoneFlagElement
 * @extends {AoflElement}
 */
class IconTwotoneFlagElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFlagElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-flag';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFlagElement.is, IconTwotoneFlagElement);

export default IconTwotoneFlagElement;
