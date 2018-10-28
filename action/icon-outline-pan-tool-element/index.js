import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePanToolElement
 * @class IconOutlinePanToolElement
 * @extends {AoflElement}
 */
class IconOutlinePanToolElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePanToolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-pan-tool';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePanToolElement.is, IconOutlinePanToolElement);

export default IconOutlinePanToolElement;
