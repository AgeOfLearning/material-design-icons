import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTvElement
 * @class IconTwotoneTvElement
 * @extends {AoflElement}
 */
class IconTwotoneTvElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTvElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-tv';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTvElement.is, IconTwotoneTvElement);

export default IconTwotoneTvElement;
