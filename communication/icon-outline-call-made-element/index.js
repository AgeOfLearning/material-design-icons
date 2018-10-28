import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCallMadeElement
 * @class IconOutlineCallMadeElement
 * @extends {AoflElement}
 */
class IconOutlineCallMadeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCallMadeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-call-made';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCallMadeElement.is, IconOutlineCallMadeElement);

export default IconOutlineCallMadeElement;
