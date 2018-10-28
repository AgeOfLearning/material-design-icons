import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCallMissedElement
 * @class IconOutlineCallMissedElement
 * @extends {AoflElement}
 */
class IconOutlineCallMissedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCallMissedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-call-missed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCallMissedElement.is, IconOutlineCallMissedElement);

export default IconOutlineCallMissedElement;
