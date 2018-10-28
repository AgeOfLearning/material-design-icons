import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTvOffElement
 * @class IconTwotoneTvOffElement
 * @extends {AoflElement}
 */
class IconTwotoneTvOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTvOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-tv-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTvOffElement.is, IconTwotoneTvOffElement);

export default IconTwotoneTvOffElement;
