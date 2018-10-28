import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGrainElement
 * @class IconOutlineGrainElement
 * @extends {AoflElement}
 */
class IconOutlineGrainElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGrainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-grain';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGrainElement.is, IconOutlineGrainElement);

export default IconOutlineGrainElement;
