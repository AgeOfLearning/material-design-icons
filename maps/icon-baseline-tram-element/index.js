import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTramElement
 * @class IconBaselineTramElement
 * @extends {AoflElement}
 */
class IconBaselineTramElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTramElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-tram';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTramElement.is, IconBaselineTramElement);

export default IconBaselineTramElement;
