import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCallElement
 * @class IconTwotoneCallElement
 * @extends {AoflElement}
 */
class IconTwotoneCallElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-call';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCallElement.is, IconTwotoneCallElement);

export default IconTwotoneCallElement;
