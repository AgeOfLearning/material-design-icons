import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePanToolElement
 * @class IconTwotonePanToolElement
 * @extends {AoflElement}
 */
class IconTwotonePanToolElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePanToolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-pan-tool';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePanToolElement.is, IconTwotonePanToolElement);

export default IconTwotonePanToolElement;
