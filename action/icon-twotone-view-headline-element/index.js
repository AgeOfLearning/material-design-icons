import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneViewHeadlineElement
 * @class IconTwotoneViewHeadlineElement
 * @extends {AoflElement}
 */
class IconTwotoneViewHeadlineElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneViewHeadlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-view-headline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneViewHeadlineElement.is, IconTwotoneViewHeadlineElement);

export default IconTwotoneViewHeadlineElement;
