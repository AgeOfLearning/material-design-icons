import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCallMissedElement
 * @class IconTwotoneCallMissedElement
 * @extends {AoflElement}
 */
class IconTwotoneCallMissedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCallMissedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-call-missed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCallMissedElement.is, IconTwotoneCallMissedElement);

export default IconTwotoneCallMissedElement;
