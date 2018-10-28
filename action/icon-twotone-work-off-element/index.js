import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWorkOffElement
 * @class IconTwotoneWorkOffElement
 * @extends {AoflElement}
 */
class IconTwotoneWorkOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWorkOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-work-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWorkOffElement.is, IconTwotoneWorkOffElement);

export default IconTwotoneWorkOffElement;
