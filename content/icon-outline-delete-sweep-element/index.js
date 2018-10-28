import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDeleteSweepElement
 * @class IconOutlineDeleteSweepElement
 * @extends {AoflElement}
 */
class IconOutlineDeleteSweepElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDeleteSweepElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-delete-sweep';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDeleteSweepElement.is, IconOutlineDeleteSweepElement);

export default IconOutlineDeleteSweepElement;
