import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneViewStreamElement
 * @class IconTwotoneViewStreamElement
 * @extends {AoflElement}
 */
class IconTwotoneViewStreamElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneViewStreamElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-view-stream';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneViewStreamElement.is, IconTwotoneViewStreamElement);

export default IconTwotoneViewStreamElement;
