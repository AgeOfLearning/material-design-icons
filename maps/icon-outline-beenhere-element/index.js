import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBeenhereElement
 * @class IconOutlineBeenhereElement
 * @extends {AoflElement}
 */
class IconOutlineBeenhereElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBeenhereElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-beenhere';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBeenhereElement.is, IconOutlineBeenhereElement);

export default IconOutlineBeenhereElement;
