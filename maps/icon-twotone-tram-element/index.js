import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTramElement
 * @class IconTwotoneTramElement
 * @extends {AoflElement}
 */
class IconTwotoneTramElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTramElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-tram';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTramElement.is, IconTwotoneTramElement);

export default IconTwotoneTramElement;
