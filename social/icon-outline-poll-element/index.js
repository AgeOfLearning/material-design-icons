import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePollElement
 * @class IconOutlinePollElement
 * @extends {AoflElement}
 */
class IconOutlinePollElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePollElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-poll';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePollElement.is, IconOutlinePollElement);

export default IconOutlinePollElement;
