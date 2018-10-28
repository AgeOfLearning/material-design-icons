import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDvrElement
 * @class IconTwotoneDvrElement
 * @extends {AoflElement}
 */
class IconTwotoneDvrElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDvrElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-dvr';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDvrElement.is, IconTwotoneDvrElement);

export default IconTwotoneDvrElement;
