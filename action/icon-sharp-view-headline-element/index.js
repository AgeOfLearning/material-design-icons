import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpViewHeadlineElement
 * @class IconSharpViewHeadlineElement
 * @extends {AoflElement}
 */
class IconSharpViewHeadlineElement extends AoflElement {
  /**
   * Creates an instance of IconSharpViewHeadlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-view-headline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpViewHeadlineElement.is, IconSharpViewHeadlineElement);

export default IconSharpViewHeadlineElement;
