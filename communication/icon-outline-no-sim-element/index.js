import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNoSimElement
 * @class IconOutlineNoSimElement
 * @extends {AoflElement}
 */
class IconOutlineNoSimElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNoSimElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-no-sim';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNoSimElement.is, IconOutlineNoSimElement);

export default IconOutlineNoSimElement;
