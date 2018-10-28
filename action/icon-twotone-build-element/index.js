import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBuildElement
 * @class IconTwotoneBuildElement
 * @extends {AoflElement}
 */
class IconTwotoneBuildElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBuildElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-build';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBuildElement.is, IconTwotoneBuildElement);

export default IconTwotoneBuildElement;
