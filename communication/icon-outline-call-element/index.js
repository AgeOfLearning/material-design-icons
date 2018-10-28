import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCallElement
 * @class IconOutlineCallElement
 * @extends {AoflElement}
 */
class IconOutlineCallElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-call';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCallElement.is, IconOutlineCallElement);

export default IconOutlineCallElement;
