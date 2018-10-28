import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineViewCompactElement
 * @class IconOutlineViewCompactElement
 * @extends {AoflElement}
 */
class IconOutlineViewCompactElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineViewCompactElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-view-compact';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineViewCompactElement.is, IconOutlineViewCompactElement);

export default IconOutlineViewCompactElement;
