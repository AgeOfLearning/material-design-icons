import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDvrElement
 * @class IconBaselineDvrElement
 * @extends {AoflElement}
 */
class IconBaselineDvrElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDvrElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-dvr';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDvrElement.is, IconBaselineDvrElement);

export default IconBaselineDvrElement;
