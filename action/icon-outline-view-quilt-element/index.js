import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineViewQuiltElement
 * @class IconOutlineViewQuiltElement
 * @extends {AoflElement}
 */
class IconOutlineViewQuiltElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineViewQuiltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-view-quilt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineViewQuiltElement.is, IconOutlineViewQuiltElement);

export default IconOutlineViewQuiltElement;
